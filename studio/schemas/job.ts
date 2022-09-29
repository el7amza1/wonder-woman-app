export default {
  name: "job",
  type: "document",
  title: "Job",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "type",
      type: "string",
      title: "Type",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "department",
      type: "string",
      title: "Department",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "closeDate",
      type: "date",
      title: "CloseDate",
    },
  ],
};
