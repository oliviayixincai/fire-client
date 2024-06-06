import "./FIREResult.scss";

function FIREResult({ data }) {
  if (!data) {
    return <p>No data available. Please submit the form to calculate.</p>;
  }

  const { yearsToFI, ageAtFI, requiredSavings, canFIRE } = data;

  return (
    <div className="fire-results">
      {canFIRE ? (
        <>
          <p>Years until financial independence: {yearsToFI}</p>
          <p className="fire-results__fire-year">Age at financial independence: {ageAtFI}</p>
        </>
      ) : (
        <p>Financial independence not possible in next 40 years.</p>
      )}

      <p>Required savings: {requiredSavings}</p>
    </div>
  );
}

export default FIREResult;
