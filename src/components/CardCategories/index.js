import React from 'react'
import {Containner, Card} from './style'

import data from '../../services/data'

function CardCategories(){
    return(
        <Containner>
             {data.categories.map(item =>
                <Card>
                    <img src={item.image} />
                    <spam>{item.name}</spam>
                </Card>
            )}
        </Containner>
           
        
    )
}

export default CardCategories