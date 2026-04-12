import PropTypes from "prop-types"

function Deneme(props){
    const {ad, soyad} = props;

    return(
        <cetner>
            <h3>Ad: {ad}</h3>
            <h5>Soyad: {soyad}</h5>
        </cetner>
    )
}

Deneme.PropTypes = {
    ad: PropTypes.string,
    soyad: PropTypes.string
}

export default Deneme
