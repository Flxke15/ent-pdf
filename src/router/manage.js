import Main from '@/views/Main'
import Test from '@/components/Test'

export default [
    {
        path: '/',
        redirect: '/Main'
    },
    {
        path: '/Main',
        name: 'Main',
        component: Main
    },
    {
        path: '/Test',
        name: 'Test',
        component: Test
    },
]