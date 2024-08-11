type Log = {
  Id: number;
  Message?: string | null;
  MessageTemplate?: string | null;
  Level?: string | null;
  TimeStamp: Date;
  Exception?: string | null;
  Properties?: string | null;
  LogEvent?: string | null;
};

export default Log;