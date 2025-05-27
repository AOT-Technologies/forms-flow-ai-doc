---
sidebar_position: 18
---

# Formsflow Analytics Usage Documentation

---

The process of how to use Redash is [well documented in official docs](https://redash.io/help/). Some of the basic steps for working with Redash are:

1. _Add Data Sources_

   You can connect with about 30+ supported data sources mentioned in docs from the browser itself.

   ![Image](https://user-images.githubusercontent.com/70306694/125465830-2b6d3985-4dc8-423c-9947-5ae3d689cab0.png)

2. _Write Queries_

   Once data is connected we can write queries. It’s always ideal to create individual queries for the necessary visualizations. Writing queries is a data preparation step to process data for visualization.

   ![Image](https://user-images.githubusercontent.com/70306694/125465939-cf68ce67-c589-49d1-9110-067d0e896054.png)

3. _Create Visualizations_

   There are a variety of visualizations supported in Redash. Ten different categories of visualization can be created with just drag and select features to visualize from the queried data. Redash supports visualization types like BoxPlot, Counter, BarCharts, Sunburst, Sankey, Word clouds, line charts and Area charts. To learn how to create visualizations checkout Redash visualization docs.

   ![Image](https://user-images.githubusercontent.com/70306694/125466037-7b66530f-235b-4198-8c6f-46d556726963.png)

4. _Create Dashboards_

   You can create interactive dashboards that can be embedded anywhere and shared with colleagues easily. The queries can be refreshed periodically as more data comes in.

   ![Image](https://user-images.githubusercontent.com/70306694/125466079-02a24f12-58ed-40e4-a669-b88dbb456645.png)

5. _Share Dashboard for Public Access_

   Share the Dashboard and enable `Allow public access` if you wish to share the dashboard outside of formsflow.ai solution.

   ![Image](https://user-images.githubusercontent.com/70306694/135583411-a7e7ce1d-6792-4884-a133-b9dcd5446cb1.png)

## Adding Dashboards on Admin Page

---

To enable dashboards, and provide authorization the following changes are required in existing installations:

1. Create a new main group called formsflow-analytics, and create as many subgroups as you want to associate various dashboards from Admin UI (in Designer)

   ![Image](/img/Screenshot-2022-05-16-123429.png)

2. Create a new mapper under forms-flow-web client in Keycloak by following the steps below:

   ![Image](/img/Screenshot-2022-05-16-130800.png)

3. Corresponding to each user, add the dashboard-groups you want to enable for dashboard authorization. Any user in a group given permission by the Admin to view a dashboard will then have access to that dashboard.

   ![Image](/img/Screenshot-2022-05-16-131123.png)

4. The dashboards added in the above step will be displayed in the Insights tab

   ![Image](/img/Screenshot-2022-05-16-131548.png)

**Note**: Users who don’t belong to any group added in Keycloak will not have access to an Insights tab.