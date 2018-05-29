import { GraphQLNamedType, GraphQLSchema } from 'graphql';
import { IResolversParameter } from '../Interfaces';
export declare type OnTypeConflict = (left: GraphQLNamedType, right: GraphQLNamedType, info?: {
    left: {
        schema?: GraphQLSchema;
    };
    right: {
        schema?: GraphQLSchema;
    };
}) => GraphQLNamedType;
export default function mergeSchemas({schemas, onTypeConflict, resolvers, inheritResolversFromInterfaces}: {
    schemas: Array<string | GraphQLSchema | Array<GraphQLNamedType>>;
    onTypeConflict?: OnTypeConflict;
    resolvers?: IResolversParameter;
    inheritResolversFromInterfaces?: boolean;
}): GraphQLSchema;
