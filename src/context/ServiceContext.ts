import * as React from "react";

import { mockService } from "service/mock";
import { Service } from "type/service";

export const ServiceContext = React.createContext<Service>(mockService);
