import React from 'react';

export default class PostForm extends React.Component {
   constructor(props) {
      super(props) 
      this.state = {
         title: '',
      }
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log('work handler');
   };

   changeInutHandler = (event ) => {
      this.setState((prev) => ({
         [event.target.name]: event.target.value
      }))
   };

   render() {
      return (
         <div>
            <h1>Post Form</h1>
            <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                  <label htmlFor="TitleName">TitleName</label>
                  <input 
                     onChange={this.changeInutHandler}
                     value={this.state.title}
                     name='title'
                     type="text" 
                     className="form-control" 
                     id="TitleName" 
                  />
               </div>
            </form>
            <button 
               onClick={this.handleSubmit}
               type='submit' 
               className="btn btn-primary"
            >Submit
            </button>
         </div>
      )
   }
}