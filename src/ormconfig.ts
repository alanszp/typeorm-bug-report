import { DataSourceOptions } from "typeorm";

const ormconfig: DataSourceOptions = {
  name: "default",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  type: "sqlite",
  database: ":memory:",
  entities: [`${__dirname}/models/**/!(*.test).{ts,js}`],
  logging: true,
};

// eslint-disable-next-line import/no-default-export
export default ormconfig;
