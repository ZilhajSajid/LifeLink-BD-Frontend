const prefix = "/dashboard";

export const requesterRoutes = [
  {
    title: "My Requests",
    items: [
      {
        title: "Request Blood",
        url: `${prefix}/create-request`,
      },
      {
        title: "My Requests",
        url: `${prefix}/my-requests`,
      },
    ],
  },
  {
    title: "App settings",

    items: [
      {
        title: "Routing",
        url: "#",
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true,
      },
    ],
  },
];
