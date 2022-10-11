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
      type: "array",
      title: "Description",
      of: [{ type: "block" }],
    },
    {
      name: "responsibilities",
      type: "array",
      title: "Responsibilities",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [{ type: "block" }],
    },
    {
      name: "requirements",
      type: "array",
      title: "Requirements",
      of: [{ type: "block" }],
    },
    {
      name: "closeDate",
      type: "date",
      title: "CloseDate",
    },
  ],
};
