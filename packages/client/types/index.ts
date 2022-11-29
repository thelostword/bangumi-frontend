/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** Type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? OneOf<[XOR<A, B>, ...Rest]>
  : never;

export interface paths {
  '/p/login': {
    /**
     * 登录
     * @description `h-captcha-response` 是 [hCaptcha 的验证码](https://docs.hcaptcha.com/#add-the-hcaptcha-widget-to-your-webpage)
     *
     * site key 是 `4874acee-9c6e-4e47-99ad-e2ea1606961f`
     */
    post: operations['login'];
  };
  '/p/logout': {
    /** 登出 */
    post: operations['logout'];
  };
  '/p/me': {
    /** 获取当前用户 */
    get: operations['getCurrentUser'];
  };
  '/p/groups/{name}/topics': {
    /** 分页获取小组讨论列表，按照回复时间倒序分页 */
    get: operations['getGroupTopicsByGroupName'];
  };
  '/p/subjects/{subject_id}/topics': {
    /** 分页获取条目讨论列表，使用最新回复时间倒序分页 */
    get: operations['getSubjectTopicsById'];
  };
  '/p/subjects/-/topics/{topic_id}': {
    /**
     * 条目讨论回复列表
     * @description 没有分页
     */
    get: operations['getSubjectTopicById'];
  };
  '/p/groups/-/topics/{topic_id}': {
    /**
     * 获取小组讨论回复列表
     * @description 没有分页
     */
    get: operations['getGroupTopicById'];
  };
  '/p/indices/{index_id}/comments': {
    /**
     * 获取目录讨论列表
     * @description 没有分页
     */
    get: operations['getIndexCommentsById'];
  };
  '/p/episodes/{episode_id}/comments': {
    /**
     * 获取章节讨论列表
     * @description 没有分页
     */
    get: operations['getEpisodeCommentsById'];
  };
  '/p/characters/{character_id}/comments': {
    /**
     * 获取角色讨论列表
     * @description 没有分页
     */
    get: operations['getCharacterCommentsById'];
  };
  '/p/persons/{person_id}/comments': {
    /**
     * 获取人物讨论列表
     * @description 没有分页
     */
    get: operations['getPersonCommentsById'];
  };
  '/p/groups/{name}': {
    /** 获取小组首页信息 */
    get: operations['getGroupProfileByName'];
  };
  '/p/groups/{name}/members': {
    /** 获取小组成员信息 */
    get: operations['listGroupMembersByName'];
  };
}

export interface components {
  schemas: {
    /**
     * User
     * @description 实际的返回值可能包括文档未声明的 `url` 字段，此字段主要用于开发者从 api 响应直接转跳到网页。
     * 客户端开发者请不用依赖于此特性，此字段的值随时可能会改变。
     *
     * @example {
     *   "avatar": {
     *     "large": "https://lain.bgm.tv/pic/user/l/000/00/00/1.jpg?r=1391790456",
     *     "medium": "https://lain.bgm.tv/pic/user/m/000/00/00/1.jpg?r=1391790456",
     *     "small": "https://lain.bgm.tv/pic/user/s/000/00/00/1.jpg?r=1391790456"
     *   },
     *   "sign": "Awesome!",
     *   "username": "sai",
     *   "nickname": "Sai🖖",
     *   "id": 1,
     *   "user_group": 1
     * }
     */
    User: {
      /** ID */
      id: number;
      /**
       * Username
       * @description 唯一用户名，初始与 UID 相同，可修改一次
       */
      username: string;
      /** Nickname */
      nickname: string;
      /**
       * UserGroup
       * @description 用户组 - 1 = 管理员 - 2 = Bangumi 管理猿 - 3 = 天窗管理猿 - 4 = 禁言用户 - 5 = 禁止访问用户 - 8 = 人物管理猿 - 9 = 维基条目管理猿 - 10 = 用户 - 11 = 维基人
       * @enum {integer}
       */
      user_group: 1 | 2 | 3 | 4 | 5 | 8 | 9 | 10 | 11;
      avatar: components['schemas']['Avatar'];
      /**
       * Sign
       * @description 个人签名
       */
      sign: string;
    };
    GroupProfile: {
      /**
       * @description 小组的数字 ID
       * @example 11
       */
      id: number;
      /**
       * Format: date-time
       * @example 2008-08-01T06:11:29+08:00
       */
      created_at: string;
      /**
       * Format: bbcode
       * @example 本小组欢迎对各种技术有一定了解的人，
       * 比如像橘花热衷杀人技术……
       *
       * 不过、本组主要谈论ＰＣ软硬件方面，
       * 想了解相关知识，结识可怕的技术宅，请进。
       */
      description: string;
      /**
       * Format: url
       * @example https://lain.bgm.tv/pic/icon/l/000/00/00/11.jpg
       */
      icon: string;
      /**
       * @description 小组的 string ID，原本出现在小组URL中
       * @example a
       */
      name: string;
      /** @description 新加入的用户，最多 10 个。 */
      new_members: components['schemas']['GroupMember'][];
      /** @example ～技术宅真可怕～ */
      title: string;
      /**
       * @description 用户数
       * @example 9450
       */
      total_members: number;
    };
    /**
     * Avatar
     * @example {
     *   "large": "https://lain.bgm.tv/pic/user/l/000/00/00/1.jpg?r=1391790456",
     *   "medium": "https://lain.bgm.tv/pic/user/m/000/00/00/1.jpg?r=1391790456",
     *   "small": "https://lain.bgm.tv/pic/user/s/000/00/00/1.jpg?r=1391790456"
     * }
     */
    Avatar: {
      /**
       * Large
       * Format: url
       */
      large: string;
      /**
       * Medium
       * Format: url
       */
      medium: string;
      /**
       * Small
       * Format: url
       */
      small: string;
    };
    /** ErrorDetail */
    ErrorDetail: {
      /** Title */
      title: string;
      /** Description */
      description: string;
      /** Detail */
      details?: OneOf<
        [
          string,
          {
            /** @description error message */
            error?: string;
            /** @description request path */
            path?: string;
          },
        ]
      >;
    };
    Group: {
      id: number;
      name: string;
      /** Format: date-time */
      created_at: string;
      title: string;
      /** Format: url */
      icon: string;
      total_members: number;
      description: string;
    };
    PrivateTopicDetail: {
      comments: components['schemas']['Comment'][];
    } & {
      state: components['schemas']['Comment']['state'];
      /** @description 发帖人是否好友 */
      is_friend: boolean;
      /**
       * Format: date-time
       * @example "2008-07-14T07:34:07.000Z"
       */
      created_at?: string;
      creator: components['schemas']['User'];
      /**
       * Format: int32
       * @example 1
       */
      id: number;
      /**
       * Format: int32
       * @example 76
       */
      reply_count: number;
      /** @example SAi看的也是红皮书吧 */
      text: string;
      /** @example 拿这个来测试 */
      title: string;
      /**
       * Format: date-time
       * @example "2021-12-20T11:18:49.000Z"
       */
      updated_at: string;
    };
    /** Topic */
    Topic: {
      /**
       * Format: date-time
       * @example "2008-07-14T07:34:07.000Z"
       */
      created_at: string;
      creator: components['schemas']['User'];
      /**
       * Format: int32
       * @example 1
       */
      id: number;
      /**
       * Format: int32
       * @description 全部回复，包括二级回复
       * @example 76
       */
      reply_count: number;
      /** @example 拿这个来测试 */
      title: string;
      /**
       * Format: date-time
       * @example "2021-12-20T11:18:49.000Z"
       */
      updated_at: string;
    };
    /** Comment */
    Comment: {
      /** @description 发帖人是否好友 */
      is_friend: boolean;
      /**
       * Format: date-time
       * @example "2008-07-14T07:38:35.000Z"
       */
      created_at: string;
      creator: components['schemas']['User'];
      /**
       * Format: int32
       * @example 2
       */
      id: number;
      replies: {
        /**
         * Format: date-time
         * @example "2012-12-23T12:46:29.000Z"
         */
        created_at: string;
        creator: components['schemas']['User'];
        /**
         * Format: int32
         * @example 24360
         */
        id: number;
        /**
         * @description 如果 `state` 不为 `0`，内容为空
         * @example [quote][b]15www[/b] 说: 檞寄生+1 我的明菁 T-T[/quote]\n挖墳黨喪心病狂！
         */
        text?: string;
        state: components['schemas']['Comment']['state'];
        /** @description 发帖人是否好友 */
        is_friend: boolean;
      }[];
      /**
       * @description 如果 `state` 不为 `0`，内容为空
       * @example 你是猪 ... 鉴定完毕 ...
       */
      text: string;
      /**
       * CommentState
       * @description 回复和帖子共用的状态
       *
       * 表示帖子正常/下沉/关闭
       *
       * 如果是回复，表示管理员的下沉/关闭主题操作
       *
       *
       * - `0` 正常
       * - `2` 重开
       * - `1` 管理员关闭帖子
       * - `5` 管理员下沉帖子
       * - `6` 被用户删除
       * - `7` 违反社区指导原则，已被删除
       * @example 0
       * @enum {integer}
       */
      state: 0 | 1 | 2 | 5 | 6 | 7;
    };
    GroupMember: {
      avatar: components['schemas']['Avatar'];
      /** @example 1 */
      id: number;
      /** @example Sai🖖 */
      nickname: string;
      /** @example sai */
      username: string;
      /**
       * Format: date-time
       * @example 2022-06-25T21:07:38.466+08:00
       */
      joined_at: string;
    };
    Paged: {
      /** Total */
      total: number;
      /** Limit */
      limit: number;
      /** Offset */
      offset: number;
    };
    /** Paged[Topic] */
    Paged_Topic: components['schemas']['Paged'] & {
      /** Data */
      data: components['schemas']['Topic'][];
    };
    /** Comments */
    Comments: {
      comments: components['schemas']['Comment'][];
    };
  };
  responses: never;
  parameters: {
    /** @description 分页参数 */
    default_query_limit: number;
    /** @description 分页参数 */
    default_query_offset: number;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
  login: {
    /**
     * 登录
     * @description `h-captcha-response` 是 [hCaptcha 的验证码](https://docs.hcaptcha.com/#add-the-hcaptcha-widget-to-your-webpage)
     *
     * site key 是 `4874acee-9c6e-4e47-99ad-e2ea1606961f`
     */
    requestBody?: {
      content: {
        'application/json': {
          email: string;
          password: string;
          'h-captcha-response': string;
        };
      };
    };
    responses: {
      /** @description 账号密码正确，设置 Cookies */
      200: {
        headers: {
          /** @description 设置 cookies session */
          'Set-Cookie'?: string;
        };
        content: {
          'application/json': components['schemas']['User'];
        };
      };
      /** @description 请求错误或者验证码错误 */
      400: {
        content: {
          'application/json': {
            /** Title */
            title: string;
            /** Description */
            description: string;
            /** Detail */
            details: string[];
          };
        };
      };
      /** @description 账号或密码错误 */
      401: {
        content: {
          'application/json': {
            /** Title */
            title: string;
            /** Description */
            description: string;
            /** Detail */
            details: {
              /** @description 剩余可用登录次数。 */
              remain: number;
            };
          };
        };
      };
      /** @description content-type 不是 `application/json` */
      415: never;
      /** @description JSON 语法错误 */
      422: never;
      /** @description 登录失败次数太多 */
      429: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description hCaptcha HTTP 请求失败 */
      502: never;
    };
  };
  logout: {
    /** 登出 */
    responses: {
      /** @description 正常登出 */
      204: never;
      /** @description 用户未登录或者 session 已失效 */
      401: never;
    };
  };
  getCurrentUser: {
    /** 获取当前用户 */
    responses: {
      /** @description 返回当前用户 */
      200: {
        content: {
          'application/json': components['schemas']['User'];
        };
      };
      /** @description 用户未登录或者 session 已失效 */
      401: never;
    };
  };
  getGroupTopicsByGroupName: {
    /** 分页获取小组讨论列表，按照回复时间倒序分页 */
    parameters: {
      /** @description 小组名称 */
      path: {
        name: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['Paged_Topic'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getSubjectTopicsById: {
    /** 分页获取条目讨论列表，使用最新回复时间倒序分页 */
    parameters: {
      /** @description 条目 Limit */
      /** @description 条目 Offset */
      query: {
        limit: number;
        offset: number;
      };
      /** @description 条目ID */
      path: {
        subject_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['Paged_Topic'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getSubjectTopicById: {
    /**
     * 条目讨论回复列表
     * @description 没有分页
     */
    parameters: {
      /** @description 条目讨论ID */
      path: {
        topic_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['PrivateTopicDetail'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getGroupTopicById: {
    /**
     * 获取小组讨论回复列表
     * @description 没有分页
     */
    parameters: {
      /** @description 小组讨论ID */
      path: {
        topic_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': {
            group?: components['schemas']['Group'];
          } & components['schemas']['PrivateTopicDetail'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getIndexCommentsById: {
    /**
     * 获取目录讨论列表
     * @description 没有分页
     */
    parameters: {
      /** @description 目录ID */
      path: {
        index_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['Comments'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getEpisodeCommentsById: {
    /**
     * 获取章节讨论列表
     * @description 没有分页
     */
    parameters: {
      /** @description 章节ID */
      path: {
        episode_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['Comments'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getCharacterCommentsById: {
    /**
     * 获取角色讨论列表
     * @description 没有分页
     */
    parameters: {
      /** @description 角色ID */
      path: {
        character_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['Comments'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getPersonCommentsById: {
    /**
     * 获取人物讨论列表
     * @description 没有分页
     */
    parameters: {
      /** @description 人物ID */
      path: {
        person_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          'application/json': components['schemas']['Comments'];
        };
      };
      /** @description Validation Error */
      400: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          'application/json': components['schemas']['ErrorDetail'];
        };
      };
    };
  };
  getGroupProfileByName: {
    /** 获取小组首页信息 */
    parameters: {
      /** @description 小组名，类似于 `https://bgm.tv/groups/boring` 的 `boring` */
      path: {
        name: string;
      };
    };
    responses: {
      /** @description 返回当前用户 */
      200: {
        content: {
          'application/json': components['schemas']['GroupProfile'];
        };
      };
      /** @description 小组不存在 */
      404: never;
    };
  };
  listGroupMembersByName: {
    /** 获取小组成员信息 */
    parameters: {
      /** @description 成员类型，默认为 `all` */
      query: {
        type: 'mod' | 'normal' | 'all';
      };
      /** @description 小组名，类似于 `https://bgm.tv/groups/boring` 的 `boring` */
      path: {
        name: string;
      };
    };
    responses: {
      /** @description 列出用户 */
      200: {
        content: {
          'application/json': components['schemas']['Paged'] & {
            /** Data */
            data: components['schemas']['GroupMember'][];
          };
        };
      };
      /** @description 小组不存在 */
      404: never;
    };
  };
}