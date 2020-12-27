import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'

const main = async () => {
	const orm = await MikroORM.init({
		entities: [Post],
		dbName: 'lireddit',
		// user: '',
		// password: '',
		type: 'postgresql',
		debug: !__prod__,
		// debug: true,
	})

	const post = orm.em.create(Post, { title: 'my first post'})

	await orm.em.persistAndFlush(post)
	await orm.em.nativeInsert(Post, {title: 'My second post'})
}

main()

console.log("hello world test")