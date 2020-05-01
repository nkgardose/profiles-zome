export declare const resolvers: {
    Query: {
        allAgents(_: any, __: any, { container }: {
            container: any;
        }): Promise<any>;
        me(_: any, __: any, { container }: {
            container: any;
        }): Promise<any>;
    };
    Agent: {
        id(parent: any): any;
        username(parent: any, _: any, { container }: {
            container: any;
        }): any;
    };
    Mutation: {
        setUsername(_: any, { username }: {
            username: any;
        }, { container }: {
            container: any;
        }): Promise<any>;
    };
};
