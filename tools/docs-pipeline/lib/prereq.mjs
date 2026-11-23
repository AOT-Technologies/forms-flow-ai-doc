// Prerequisites in the action inventory follow the "one step back" rule:
// each row lists only the action(s) you do immediately before it.
//   ","  = all of these (AND)
//   "|"  = any one of these (OR)
//   "()" = grouping, e.g. "(forms.create | forms.import), governed-content.create-block"
//   "—"  = no prerequisite

const ID = /[a-z0-9-]+(?:\.[a-z0-9-]+)+/g;

/** Every action_id mentioned in a prerequisites cell. */
export function prereqIds(cell) {
  if (!cell || cell.trim() === '—' || cell.trim() === '-') return [];
  return [...new Set(cell.match(ID) ?? [])];
}

/** Human-readable rendering: "A, then either B or C". Used in briefs. */
export function describePrereqs(cell, labelFor) {
  if (!cell || cell.trim() === '—') return 'None';
  return cell
    .replace(ID, (id) => labelFor(id))
    .replace(/\s*\|\s*/g, ' or ')
    .replace(/\s*,\s*/g, '; and ');
}

/**
 * Stable topological sort of actions inside one feature. Edges come from
 * prerequisites that point at actions in the same feature; anything outside
 * the feature is treated as already done. Ties keep inventory (sheet) order.
 */
export function orderActions(rows) {
  const ids = new Set(rows.map((r) => r.action_id));
  const index = new Map(rows.map((r, i) => [r.action_id, i]));
  const deps = new Map(rows.map((r) => [r.action_id, prereqIds(r.prerequisites).filter((p) => ids.has(p) && p !== r.action_id)]));
  const done = new Set();
  const out = [];
  while (out.length < rows.length) {
    const ready = rows
      .filter((r) => !done.has(r.action_id) && deps.get(r.action_id).every((d) => done.has(d)))
      .sort((a, b) => index.get(a.action_id) - index.get(b.action_id));
    if (!ready.length) {
      // Cycle: fall back to sheet order for whatever is left, and say so.
      const rest = rows.filter((r) => !done.has(r.action_id));
      console.warn(`  ! prerequisite cycle among: ${rest.map((r) => r.action_id).join(', ')}`);
      rest.forEach((r) => { done.add(r.action_id); out.push(r); });
      break;
    }
    const next = ready[0];
    done.add(next.action_id);
    out.push(next);
  }
  return out;
}
