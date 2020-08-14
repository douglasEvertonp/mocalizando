import React from 'react'
import {ContainerHome, ContentHome} from './style'

//components
import Header from '../../components/Header'
import CardCategories from '../../components/CardCategories'
import Footer from '../../components/Footer'

function Home(){
    return(
        <div>
            <Header/>
            <ContainerHome>
                <ContentHome>
                    <h1>Categorias</h1>
                    <CardCategories/>
                </ContentHome>
            </ContainerHome>
            <Footer />
        </div>
       
    )
}

export default Home