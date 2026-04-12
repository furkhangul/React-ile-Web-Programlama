import PropTypes from "prop-types"

function Urun(props){
    const {urunAdi, urunFiyati} = props;

    return(
        <div>
            <p>{urunAdi}: {urunFiyati}</p>
        </div>
    )
}
Urun.PropTypes = {
    urunAdi : PropTypes.string.isRequired,
    urunFiyati : PropTypes.number.isRequired
}

export default Urun;
