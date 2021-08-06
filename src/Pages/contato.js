import { useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
    return (
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullwidth />
                <TextField id="message" label="Message" fullwidth />
            </Grid>
            <Button className="mt-2" variant="container" color="primary">
                Sent
            </Button>
            <div className="card mt-2" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">Author</h5>
                    <p className="card-text">Message content</p>
                    <p className="card-text"><small className="text-muted">Message Date</small></p>
                </div>
            </div>
        </>
    )
}
export default Contatos;
