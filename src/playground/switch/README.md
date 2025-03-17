# Composant Switch

Le composant Switch permet de donner une valeur boolean
Ce composant peut etre utilisé avec Formik


## Les attributs

1. Attributs customs

- isActive
    - Permet de renvoyer le statut du composant
- leftText
    - Permet d'afficher un text à gauche du switch
- rightText
    - Permet d'afficher un text à droite du switch
- styles
    - Permet d'overrider le style du container et du rond
    ``` 
    switchContainer?: {
        width?: string,
        height?: string;
    }
    switchDot?: {
        width?: string,
        height?: string,
        translate?: string;
    }
    ```
- field (formik)
    - cet attribut est automatiquement ajouté lorsque le composant Input est utilisé dans une balise `<Field />`


## Utilisation basique

Ce composant gère son propre state et peut donc être utilisé simplement. Aucune props n'est obligatoire pour l'utiliser. Cependant, vous ne pourrez pas récupérer la valeur du champs sans la propriété __isActive__

1. IsActive

Ce paramètre attend une fonction qui vous permet de récupérer en live la valeur du switch

```jsx
    <Swtich 
        isActive={value => console.log(value)}

        // autres paramètres...
    />
```

## Utilisation avec Formik

Ce composant fonctionne un peu différemment avec formik. Le développeur n'aura pas besoin de modifier le code du composant Input mais devra adapter son code.

1. Field

Lors de l'utilisation de formik, nous devons utiliser le composant `<Field />` qui permet de passer à la propriété __component__ notre custom component.

```jsx
<Field
    // name permet de cibler le field et récupérer sa valeur
    name="my_switch" 
    component={Switch}
    
    // autres paramètres...
/>
```

Formik gère son propre state mais il est tout de meme possible de récupérer la donnée en utilisant __isActive__

2. Récupérer la donnée du Switch

A. Dans le formik context

Si on souhaite récupérer la donnée __dans un composant enfant de Formik__, il suffit d'utiliser `const { values } = useFormikContext()`. Values affichera toutes les valeurs du form à un instant T. Toutes les autres méthodes de formik sont accessibles depuis ce hook. 
    
B. À l'extérieur du formik context

Le hook `useFormikContext`n'est pas accessible à l'extérieur de la balise `<Formik></Formik>`. Il faut alors passer un `useRef()` à formik.

```jsx
const formRef = useRef<FormikProps<TInitialValues>>(null);

useEffect(() => {
    const values = formRef.current?.values
    // 1. values retournera les valeurs du formik à l'instant T
    // 2. Toutes les méthodes de formik sont accessibles dans current
    // comme si on était dans le useFormikContext()
}, [formRef])

<Formik
      innerRef={formRef}

      // autres paramètres...
    >
    <Form>
    {/* ... */}
    </Form>
</Formik>
```

3. Valider le formulaire

Pour valier le formulaire et traiter les données de celui-ci, il faut utiliser la propriété __onSubmit__ de Formik. Elle peut être appeler grâce à un `button` de type `submit` à l'intérieur d'une balise `<Form />`

```jsx
const handleSubmit = (props: TInitialValues) => {
    // Affichera les props du formik lors de sa validation
    console.log(props)
}

<Formik
      onSubmit={handleSubmit}

      // autres paramètres...
    >
    <Form>
        {/* ... */}
        <button type='submit'>valider le formulaire</button>
    </Form>
</Formik>
```

