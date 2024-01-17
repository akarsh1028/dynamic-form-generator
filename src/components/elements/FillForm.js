import styles from '../styles/forminput.module.css'

const FormFill = ({ data, index }) => {

  return (
    <div className={`${styles.forminput}`}>
      <label className={`${styles.labelheading} ${data.required ? styles.required : ''}`} htmlFor={`input-${index}`}>
        {data.label ? data.label : <div style={{ color: "gray" }}>Add Label</div>}
      </label>
      {data.type === 'textarea' ?
        <textarea rows="5" readOnly id={`input-${index}`} placeholder={data.placeholder}></textarea>
        :
        data.type === 'dropdown' ?
          <select id={`input-${index}`}>
            {data.option.map((item, i) => (
              <option key={`drop${index}-${i}`} value={item}>{item ? item : <div style={{ color: "gray" }}>Add Option Title</div>}</option>
            ))}
          </select>
          :
          data.type === 'checkbox' ?
            <div className={styles.optionbox}>
              {data.option.map((item, i) => (
                <div key={`check${index}-${i}`} className={styles.checkradio}>
                  <input readOnly id={`${data.type + i}-${index}`} type={data.type} />
                  <label htmlFor={`${data.type + i}-${index}`}>{item ? item : <div style={{ color: "gray" }}>Add Option Title</div>}</label>
                </div>
              ))}
            </div>
            :
            data.type === 'radio' ?
              <div className={styles.optionbox}>
                {data.option.map((item, i) => (
                  <div key={`radio${index}-${i}`} className={styles.checkradio}>
                    <input name={`${data.label}-${index}`} readOnly id={`${data.type + i}-${index}`} type={data.type} />
                    <label htmlFor={`${data.type + i}-${index}`}>{item ? item : <div style={{ color: "gray" }}>Add Option Title</div>}</label>
                  </div>
                ))}
              </div>
              :
              <input id={`input-${index}`} value={data.value}  max={data.max} min={data.min} type={data.type} placeholder={data.placeholder} />
      }
    </div>
  )
}

export default FormFill