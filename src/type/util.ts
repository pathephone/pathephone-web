interface PendingProto<NameType> {
  type: NameType;
  status: "PENDING";
}
interface PendingProtoWithMeta<NameType, MetaType>
  extends PendingProto<NameType> {
  meta: MetaType;
}

interface ResolvedProto<NameType, ValueType> {
  type: NameType;
  status: "RESOLVED";
  payload: ValueType;
}
interface ResolvedProtoWithMeta<NameType, ValueType, MetaType>
  extends ResolvedProto<NameType, ValueType> {
  meta: MetaType;
}

interface RejectedProto<NameType> {
  type: NameType;
  status: "REJECTED";
  payload: Error;
}
interface RejectedProtoWithMeta<NameType, MetaType>
  extends RejectedProto<NameType> {
  meta: MetaType;
}

type AsyncEventNoMetaProto<NameType, ValueType> =
  | PendingProto<NameType>
  | ResolvedProto<NameType, ValueType>
  | RejectedProto<NameType>;

type AsyncEventWithMetaProto<NameType, ValueType, MetaType> =
  | PendingProtoWithMeta<NameType, MetaType>
  | ResolvedProtoWithMeta<NameType, ValueType, MetaType>
  | RejectedProtoWithMeta<NameType, MetaType>;

export type AsyncEventProto<
  NameType,
  ValueType,
  MetaType = void
> = MetaType extends void
  ? AsyncEventNoMetaProto<NameType, ValueType>
  : AsyncEventWithMetaProto<NameType, ValueType, MetaType>;

export type Collection<ItemType> = {
  byId: Map<string, ItemType>;
  wantedIds: Set<string>;
};

export type List<ItemType> = {
  itemsByPage: Map<number, ItemType[]>;
  wantedPages: number[];
  ended: boolean;
};
