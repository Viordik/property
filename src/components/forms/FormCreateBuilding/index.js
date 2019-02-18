import React, { useState } from 'react';
import * as R from 'ramda';

// Style
import './style.css';

const getUniqIDBlock = ((id = 1) => () => id++)();
// const getUniqIDBuilding = ((id = 1) => () => id++)();
const getUniqIDOffer = ((id = 1) => () => id++)();

const FormCreateBuilding = (props) => {
    const [fields, setFields] = useState({
        class: '',
        street: '',
        houseNumber: '',
        floors: 0,
        blocks: [],
    });

    const onChangeField = (event) => {
        const { name, value } = event.target;

        setFields(prevFields => R.assoc(name, value, prevFields));
    };

    const onChangeFieldBlock = (event) => {
        const { value } = event.target;
        const [, index, name] = event.target.name.split('.');

        setFields(prevFields => R.assocPath(['blocks', parseInt(index), name], value, prevFields));
    }

    const onChangeFieldOffer = (event) => {
        const { value, name } = event.target;

        const [, blockIndex, , offerIndex, offerField] = name.split('.');

        const offerFieldPath = [
            'blocks',
            parseInt(blockIndex),
            'offers',
            parseInt(offerIndex),
            offerField
        ]

        setFields((prevFields) => R.assocPath(
            offerFieldPath,
            value,
            prevFields
        ))
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.info('fields: ', fields);
    }

    const onReset = (event) => {
        event.preventDefault();
        setFields({
            class: '',
            street: '',
            houseNumber: '',
            floors: 0,
            blocks: [],
        });
    }

    const onClickAddBlock = (event) => {
        const blocksLens = R.lensPath(['blocks']);

        setFields(
            prevFields => R.over(
                blocksLens,
                R.append({
                    id: getUniqIDBlock(),
                    area: 0,
                    floor: 0,
                    offers: []
                }),
                prevFields,
            )
        )
    }

    const onClickDeleteBlock = (blockIndex) => () => {
        setFields(
            prevFields => R.assoc(
                'blocks',
                prevFields.blocks.filter((_, index) => index !== blockIndex),
                prevFields
            )
        )
    }

    const onClickAddOffer = (index) => () => {
        const offersLens = R.lensPath(['blocks', index, 'offers']);

        setFields((prevFields) => R.over(
            offersLens,
            R.append({ id: getUniqIDOffer(), offerType: 'rent' }),
            prevFields
        ));
    }

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <fieldset>
                <label>
                    <span>Класс здания</span>
                    <input name="class" value={fields.class} onChange={onChangeField} />
                </label>

                <label>
                    <span>Улица</span>
                    <input name="street" value={fields.street} onChange={onChangeField} />
                </label>

                <label>
                    <span>Номер дома</span>
                    <input name="houseNumber" value={fields.houseNumber} onChange={onChangeField} />
                </label>

                <label>
                    <span>Количество этажей</span>
                    <input name="floors" value={fields.floors} onChange={onChangeField} />
                </label>

                <button type="button" onClick={onClickAddBlock}>Добавить блок</button>
            </fieldset>

            {
                fields.blocks.length > 0 && (
                    <fieldset>
                        {
                            fields.blocks.map((blockFields, blockIndex) => (
                                <React.Fragment>
                                    <div key={blockFields.id}>
                                        <label>
                                            <span>Площадь</span>
                                            <input name={`blocks.${blockIndex}.area`} value={ blockFields.area } onChange={onChangeFieldBlock} />
                                        </label>

                                        <label>
                                            <span>Этаж</span>
                                            <input name={`blocks.${blockIndex}.floor`} value={ blockFields.floor } onChange={onChangeFieldBlock} />
                                        </label>

                                        <button type="button" onClick={onClickDeleteBlock(blockIndex)}>X</button>
                                        <button type="button" onClick={onClickAddOffer(blockIndex)}>Добавить предложение</button>
                                    </div>

                                    {
                                        blockFields.offers.length > 0 && (
                                            <fieldset>
                                                {
                                                    blockFields.offers.map((offerFields, offerIndex) => (
                                                        <div key={offerFields.id}>
                                                            <label>
                                                                <span>Тип предложения</span>

                                                                <select
                                                                    name={`blocks.${blockIndex}.offers.${offerIndex}.offerType`}
                                                                    value={offerFields.offerType}
                                                                    onChange={onChangeFieldOffer}
                                                                >
                                                                    <option value="rent">Аренда</option>
                                                                    <option value="sale">Продажа</option>
                                                                </select>
                                                            </label>
 
                                                            {/* <button type="button" onClick={onClickDeleteBlock(index)}>X</button>
                                                            <button type="button" onClick={onClickAddOffer(index)}>Добавить предложение</button> */}
                                                        </div>
                                                    ))
                                                }
                                            </fieldset>
                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </fieldset>
                )
            }

            <button type="reset">Сбросить форму</button>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default FormCreateBuilding;