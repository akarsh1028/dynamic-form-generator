import styles from './styles/typeselector.module.css'
import { ChevronDown, CircleDot, ListChecks, Pencil, Plus, SquarePen, X } from 'lucide-react';
import SelectInputs from './elements/SelectInputs';
import { useState } from 'react';

const TypeSelector = () => {

  const [showElements, setShowElements] = useState(false);

  const elemets = [
    {
      title: 'Text',
      icon: <Pencil />,
    },
    {
      title: 'Text Area',
      icon: <SquarePen />,
    },
    {
      title: 'Dropdown',
      icon: <ChevronDown />
    },
    {
      title: 'Checkbox',
      icon: <ListChecks />
    },
    {
      title: 'Radio',
      icon: <CircleDot />
    },
  ]

  return (
    <>
      {showElements ?
        <section className={styles.elementsbar}>
          <div className={styles.header}>
            <h3>Form Elements</h3>
            <X className={styles.closeIcon} onClick={() => setShowElements(false)} />
          </div>
          <div>
            {elemets.map((item) => (
              <SelectInputs key={item.title} data={item} styles={styles} setShowElements={setShowElements}/>
            ))}
          </div>
        </section>
        :
        <div className={styles.addElement} onClick={() => setShowElements(true)}><p>Add Form Element</p><Plus /></div>
      }
    </>
  )
}

export default TypeSelector