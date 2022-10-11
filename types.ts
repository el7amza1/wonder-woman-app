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
  responsibilities: string;
  skills: string;
  requirements: string;
  closeDate: string;
  _createdAt: string;
  _type: string;
  _updatedAt: string;
}

export type Department = {
  _id: string;
  title: string;
};

export interface AppProps {
  departments: Department[];
  jobs: Job[];
}
