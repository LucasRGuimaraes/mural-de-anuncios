module.exports = {
     posts: [
          {
               id: "aujshdjash",
               title: "Teste do mural",
               description: "Descrição para teste do mural"
          },
     ],

     getAll(){
          return this.posts
     },

     newPost(title, description){
          this.posts.push({id: generateID(), title, description})
     },

     deletePost(id){
          this.posts.splice(id, 1)
     }

}

function generateID(){
     return Math.random().toString(36).substr(2, 9)
}