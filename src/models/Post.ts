type Post = {

    title:string,
    date:string,
    description:string
}

const array:Post[] = [];

export = {

    newPost: ({title, date, description}:Post) => {

        array.push({title, date, description});
    },

    getPosts: () => array

}

