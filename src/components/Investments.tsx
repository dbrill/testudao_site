import INVESTMENTS from '../util/investments';
type Props = {};
function Investments(props: Props) {
    return (
        <div className="Investments-Body">
            <div className="Investments-Header">
                Investments
            </div>
            <div className="Investments-Data">
                {INVESTMENTS.map((investment) => {
                    return (
                        <div className="Investment" key={investment.company}>
                            <div>
                                {investment.company}
                            </div>
                            <div>
                                ${investment.amount}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Investments
