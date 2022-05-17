import Home from '../Home/Home';
export default function MovieList(props){
    console.log(2222,props.movies);
    return (
        <div className='divid'>
         {
               props.movies.map(value => {
                return( <>
                  <Home data = {value} UpdateMovies={props.UpdateMovies}/>

                </>
                )
            
         })
         }   
        
        </div>
    )
}