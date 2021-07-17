import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
  }

  handleCreateComunity(e) {
    e.preventDefault();
    e.stopPropagation();
  
    const formData = new FormData(e.target);
  
    const community = {
      id: new Date().toISOString(),
      title: formData.get('title'),
      image: formData.get('image')
    }
    
   this.props.setCommunities([...this.props.communities, community])
  }

  render(){
    return(
      <form 
        onSubmit={this.handleCreateComunity.bind(this)}
      >
        <div>
          <input 
            placeholder="Qual vai ser o nome da sua comunidade?" 
            name="title" 
            aria-label="Qual vai ser o nome da sua comunidade?"
          />
        </div>
        <div>
          <input 
            placeholder="Coloque uma URL para usarmos de capa" 
            name="image" 
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>
        <button>
          Criar comunidade
        </button>
      </form>
    )
  }

}
export default Form;