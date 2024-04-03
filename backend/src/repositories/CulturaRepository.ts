import appDataSource from "../database/appDataSource";
import { Cultura } from "../entities/Cultura";

export const CulturaRepository = appDataSource.getRepository(Cultura)