
import React, { useState, useMemo } from 'react';

const component = (props) => {
    const [allResultsVisible, setAllResultsVisible] = useState(false);

    const handleToggle = () => {
        setAllResultsVisible(!allResultsVisible);
    }

    // Пример использования useMemo с проверкой условий
    const filteredData = useMemo(() => {
        if (props.startIdx <= props.endIdx && props.endIdx < props.data.length) {
            return props.data.slice(props.startIdx, props.endIdx + 1);
        }
        return [];
    }, [props.startIdx, props.endIdx, props.data]);

    const renderResults = () => {
        return (
            <section>
                <p onClick={handleToggle}>
                    More results v
                </p>
                {
                    allResultsVisible &&
                        <section className="entity-block--hidden-results">
                            {/* ... */}
                        </section>
                }
            </section>
        );
    };

    return <div>{renderResults()}</div>;
}

export default component;