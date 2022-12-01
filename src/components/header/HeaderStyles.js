import { makeStyles } from 'tss-react/mui';

const HeaderStyles = makeStyles({ "name": "Header" })(theme => ({
    headline: {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'normal',
        color: '#CE6311',
        padding: '40px 0 20px 0'
    }
}))

export default HeaderStyles;