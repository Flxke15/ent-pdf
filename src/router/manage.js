import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

export default [
    {
        path: '/',
        redirect: '/HelloWorld'
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test
    },
]