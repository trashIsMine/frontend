export interface SignUp{
    username: string,
    password: string,
    name: string,
    email: string,
    birth: string,
    introduction: string,
    gender: string,
    authorityDtoSet: AuthorityDtoSet[];
}

interface AuthorityDtoSet{
    authorityName: string;
}

export const EmptySignUp: SignUp = {
    username: '',
    password: '',
    name: '',
    email:'',
    birth:'',
    introduction:'',
    gender:'',
    authorityDtoSet:[
        {
            authorityName: ''
        }
    ]
}