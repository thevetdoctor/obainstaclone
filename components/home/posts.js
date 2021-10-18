import users from './users';

const posts = users.map(user => ({
    imageUrl: user.image,
    user: user.user,
    likes: Math.floor(Math.random() * 1000),
    caption: 'EndSars is a memory',
    profilePicture: user.image,
    comments: [
        {
            user: 'frankrichboy',
            comment: 'What kind of rough play 🤷🏾‍♂️ Is either these ones are not married or they are done having children,, because any kpararam like this wahala go dey ohh😂😂 if you know you know 🧐 e be like say Babuwaya never 🤐 make I no talk'
        },
        {
            user: 'prettymikeoflagos',
            comment: 'VAWULENCE has been declared this October 🧐tighten ur belts” Live in PH, came with a msg from the spiritual world, 🙆🏾‍♂️'
        },
        {
            user: 'evycuska',
            comment: '@aurora_pulsar and as I wrote, 1st I would calm the dog down. So its behaviour wouldn\'t be "praised" by cuddling'
        },
        {
            user: 'zuliat_',
            comment: 'zuliat_ Husband goal💯 not that you will ignore me for new creatures you just met 2years'
        },
        {
            user: 'honorable_exkid1',
            comment: '😂😂😂😂 INSTAGRAM'
        },
        {
            user: 'bigbirdkuti',
            comment: '#blacktimes never sounded this fire!! Thanks @femiakuti for gracing us with ur majestic presence. For ever lives the king #getthesax get 2 saxes !!!'
        },
        {
            user: 'nana.inspires',
            comment: 'nana.inspires May God give us the grace to maintain it and put in each and everyone of us the spirit of excellence.AMEN'
        },
        {
            user: 'yelesho',
            comment: '@falzthebahdguy has raised the bar at Felabration 2021! We go commot on October 20 2021. Dem No Born Dem! @PoliceNG Lagos werey dey disguise! #endsarsmemorial ALL Roads Lead to #LekkiTollGate #RevolutionNow NO RETREAT NO SURRENDER!'
        },
        {
            user: '2jazein2wayz',
            comment: 'Wetin concern enemies with wetin dem gift u? No be everything enemies send abeg'
        },
        {
            user: 'officiallindaikeji ',
            comment: 'Conquered blogging. About to conquer the Nigerian movie industry. You guys are not even ready for this movie! 💃💃 #DarkOctober! Coming soon!'
        },
        {
            user: user.user,
            comment: 'What are you doing today?'
        }
    ]
}));

export default posts;