import type { MockMethod } from 'vite-plugin-mock'

export const sessions = [
	{
		"id": 2136,
		"topic": "新會話"
	},
	{
		"id": 2135,
		"topic": "新會話"
	},
	{
		"id": 2133,
		"topic": "新會話"
	},
	{
		"id": 2126,
		"topic": "这本书讲述了什么内容"
	},
	{
		"id": 2125,
		"topic": "这本书讲述了什么内容？"
	},
	{
		"id": 2122,
		"topic": "这本书讲了什么"
	},
	{
		"id": 2121,
		"topic": "新會話"
	},
	{
		"id": 2120,
		"topic": "新會話"
	},
	{
		"id": 2119,
		"topic": "介绍一下唐廷枢"
	},
	{
		"id": 2117,
		"topic": "新會話"
	},
	{
		"id": 2116,
		"topic": "新會話"
	},
	{
		"id": 2115,
		"topic": "介绍一下西游记"
	},
	{
		"id": 2114,
		"topic": "4位面壁者是谁"
	},
	{
		"id": 2113,
		"topic": "智子是谁"
	},
	{
		"id": 2112,
		"topic": "新會話"
	},
	{
		"id": 2110,
		"topic": "新會話"
	},
	{
		"id": 2109,
		"topic": "新會話"
	},
	{
		"id": 2108,
		"topic": "新會話"
	},
	{
		"id": 2106,
		"topic": "这本书的书名和作者是谁"
	},
	{
		"id": 2107,
		"topic": "智子是谁"
	},
	{
		"id": 2105,
		"topic": "我选了几本书，这几本书的书名是什么"
	},
	{
		"id": 2102,
		"topic": "这本书的作者是谁？"
	},
	{
		"id": 2104,
		"topic": "新會話"
	},
	{
		"id": 2065,
		"topic": "新會話"
	},
	{
		"id": 2062,
		"topic": "新會話"
	},
	{
		"id": 2061,
		"topic": "新會話"
	},
	{
		"id": 2060,
		"topic": "新會話"
	},
	{
		"id": 2059,
		"topic": "新會話"
	},
	{
		"id": 1980,
		"topic": "这本书讲了什么"
	}
];

export const findSessionByName: MockMethod = {
	url: "/dev-test/session/findSessionByName", //请求地址
	method: 'post', //请求方式
	response: ({ body }) => {
		const { topic } = body;
		let list = sessions;
		if(topic) {
			list = sessions.filter((item) => item.topic === topic);
		}
		//没有对话返回失败信息
		if (!list) {
			return { code: 201, data: { message: "对话不存在" } };
		}
		return { code: 200, data: { list } };
	},
};
