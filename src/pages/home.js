import { useStyletron } from 'baseui';
import React, { useEffect, useState } from 'react';
import { Accordion, Panel } from "baseui/accordion";
import Filter from 'baseui/icon/filter';
import api from '../service/api'
import {
    LabelMedium,
    ParagraphMedium,
} from 'baseui/typography';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { Button } from 'baseui/button';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    let [agendas, setAgendas] = useState();


    useEffect(() => {
        api.get("/")
            .then((response) => setAgendas(response.data.content))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [css] = useStyletron();
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
        <div className={css({
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        })}>
            <LabelMedium>Todas as Pautas</LabelMedium>
            <div className={css({
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
            })}>
                <ParagraphMedium className={css({
                    display: 'flex',
                    alignItems: 'center',
                })}><Filter size='2rem' className={css({
                    marginRight: '0.3rem',
                })} />Filter</ParagraphMedium>
            </div>
        </div>
        {
            agendas?.map(({ open, id, dateEnd, dateStart, description, name }, index) => (
                <div>
                    <Accordion
                        accordion
                        key={index}
                    >
                        {console.log(open)}
                        <Panel title={name}>
                            <div>
                                <div>
                                    <h4>Descrição</h4>
                                    <p>{description}</p>
                                    <hr />
                                    <h4>Data de Início: {dateStart} </h4>
                                    <h4>Data de encerramento: {dateEnd}</h4>
                                </div>
                                {
                                    open ? (
                                        <FlexGrid
                                            flexGridColumnCount={2}>
                                            <FlexGridItem>
                                                <Tag
                                                    kind={KIND.positive}
                                                    variant={VARIANT.solid}>
                                                    Votação em andamento
                                                </Tag>
                                            </FlexGridItem>
                                            <FlexGridItem flex={"end"}>
                                                <Button onClick={() => navigate("/vote/"+id)}>Votar</Button>
                                            </FlexGridItem>

                                        </FlexGrid>
                                    ) :
                                        <div>
                                            <Tag
                                                kind={KIND.negative}
                                                variant={VARIANT.solid}>
                                                Votação Encerrada
                                            </Tag>
                                        </div>}
                            </div>
                        </Panel>

                        <br />
                    </Accordion>
                </div>
            ))
        }
    </div>;
};
export default Home;