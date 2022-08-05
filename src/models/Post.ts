type Post = {

    tittle:string,
    date:string,
    description:string
}

const array:Post[] = [];

export = {

    newPost: ({tittle, date, description}:Post) => {

        array.push({tittle, date, description})
    },

    getPosts: () => array

}

