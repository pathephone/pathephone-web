type PendingProto<NameType> = {
  type: NameType;
  status: "PENDING";
};

type ResolvedProto<NameType, ValueType> = {
  type: NameType;
  status: "RESOLVED";
  payload: ValueType;
};

type RejectedProto<NameType> = {
  type: NameType;
  status: "REJECTED";
  payload: Error;
};

export type ServiceEventProto<NameType, ValueType> =
  | PendingProto<NameType>
  | ResolvedProto<NameType, ValueType>
  | RejectedProto<NameType>;
