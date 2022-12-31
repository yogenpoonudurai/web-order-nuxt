type Context = {
  app: {
    data: Data;
  };
  redirect: (path: string) => void;
};

type Data = {
  login: (email: string, password: string) => Promise<void>;
};
export default function (context: Context) {
  context.app.data = {
    login: async (email: string, password: string) => {
      //login here
    },
  };
}
