export interface Props {
  children: JSX.Element[] | JSX.Element;
}

export interface Job {
  _id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  closeDate: string;
  _createdAt: string;
  _type: string;
  _updatedAt: string;
}
