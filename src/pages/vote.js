import { useStyletron } from 'baseui';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormControl } from 'baseui/form-control';
import { Select } from 'baseui/select';
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import api from '../service/api'


import {
    HeadingLarge,
    LabelMedium,
} from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
const Vote = () => {

    const [css] = useStyletron();

    let { id } = useParams();


    const [vote, setVote] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    const [agenda, setAgenda] = useState('');


    useEffect(() => {
        api.get("/" + id)
            .then((response) => setAgenda(response.data))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const subimitando = () => {
        console.log("Subimiteeeeeei");
    }


    return <div className={css({
        width: '100%',
        borderRadius: '0.5rem',
        background: '#fff',
        border: "1px solid #DFE0EB",
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            margin: '0 1.5rem'
        }
    })}>

        <div>

            <FlexGrid padding={'20px'} gridColumn={1}>
                <FlexGridItem>
                    <form>

                        <HeadingLarge>
                            {agenda.name}
                        </HeadingLarge>
                        <FormControl>
                            <Input
                                disabled={!agenda.isOpen}
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                                placeholder="Digite Seu cpf"
                                clearOnEscape
                            />
                        </FormControl>
                        <FormControl label="Selecione seu voto para esta pauta." caption="Selecione entre SIM e NÃO">
                            <Select
                                disabled={!agenda.isOpen}
                                searchable={false}
                                id="select-vote"
                                value={vote}
                                onChange={({ vote }) => setVote(vote)}
                                options={[
                                    { id: 'SIM', color: '#F0F8FF' },
                                    { id: 'NÃO', color: '#FAEBD7' },
                                ]}
                                labelKey="id"
                                valueKey="color"
                            />
                        </FormControl>
                        <Button disabled={!agenda.isOpen} type={'button'} onClick={subimitando}>{agenda.isOpen ? 'Votar' : 'Encerrado'}</Button>

                    </form>

                </FlexGridItem>
            </FlexGrid>


        </div>
    </div>;
};
export default Vote;