import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path/posix';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'lireddit',
  type: 'postgresql',
  user: 'anthony',
  password: 'AK474747',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
