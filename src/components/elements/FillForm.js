import styles from '../styles/forminput.module.css'

const FormFill = ({ data, index, values, setValues }) => {
  
  const onChangeHandler = (value, item) => {
    let obj = values;
    if(data.type === "checkbox"){
      let arr = obj[data.label].value
      arr.includes(value) ? arr.splice(arr.indexOf(value),1) : arr.push(value);
      obj[data.label].value = arr
    }else {
      obj[data.label].value = value;
    }
    setValues(obj);
  }

  return (
    <div className={`${styles.forminput}`}>
      <label className={`${styles.labelheading} ${data.required ? styles.required : ''}`} htmlFor={`input-${index}`}>
        {data.label ? data.label : <div style={{ color: "gray" }}>Add Label</div>}
      </label>
      {data.type === 'textarea' ?
        <textarea required={data.required} rows="5" value={values[data.type]} onChange={(e) => onChangeHandler(e.target.value)} id={`input-${index}`} placeholder={data.placeholder}/>
        :
        data.type === 'dropdown' ?
          <select id={`input-${index}`} onChange={(e) => onChangeHandler(e.target.value)}>
            {data.option.map((item, i) => (
              <option key={`drop${index}-${i}`} value={item}>{item ? item : <div style={{ color: "gray" }}>Add Option Title</div>}</option>
            ))}
          </select>
          :
          data.type === 'checkbox' ?
            <div className={styles.optionbox}>
              {data.option.map((item, i) => (
                <div key={`check${index}-${i}`} className={styles.checkradio} onClick={() => onChangeHandler(item.label, item)}>
                  <input id={`${data.type + i}-${index}`} type={data.type} />
                  <label htmlFor={`${data.type + i}-${index}`}>{item ? item.label : <div style={{ color: "gray" }}>Add Option Title</div>}</label>
                </div>
              ))}
            </div>
            :
            data.type === 'radio' ?
              <div className={styles.optionbox}>
                {data.option.map((item, i) => (
                  <div key={`radio${index}-${i}`} className={styles.checkradio} onClick={() => onChangeHandler(item.label)}>
                    <input name={`${data.label}-${index}`} id={`${data.type + i}-${index}`} type={data.type} />
                    <label htmlFor={`${data.type + i}-${index}`}>{item ? item.label : <div style={{ color: "gray" }}>Add Option Title</div>}</label>
                  </div>
                ))}
              </div>
              :
              <input id={`input-${index}`} required={data.required} value={values[data.type]} onChange={(e) => onChangeHandler(e.target.value)} max={data.max} min={data.min} type={data.type} placeholder={data.placeholder} />
      }
    </div>
  )
}

export default FormFill