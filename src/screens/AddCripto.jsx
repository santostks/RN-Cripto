import React, {useState} from 'react'
import {View, Text} from 'react-native'
import EmojiPicker, {pt} from 'rn-emoji-keyboard'

export default function AddCripto({navigation}){
    const [isOpen, setIsOpen] = useState(false)
    const [novaCripto, setNovaCripto] = usestate({
        emoji:'💰', nome:'',
        simbolo:'', quantidade: 0, valor: 0, vendido: false, valorVenda:0
    })

    const handleTeclado =(emojiObject) => {
        setNovaCripto({...novaCripto, emoji: emojiObject.emoji})
    }
    return (
        <View>
            <Text>Adicionar Cripto</Text>
            <EmojiPicker
                onEmojiSelected={ handleTeclado }
                open={isOpen}
                onClose={()=>setIsOpen(false)}
                translatio={pt}
                enableRecentlyUsed
                enableSearchBar
                />
                <Text onPress={()=>setIsOpen(true)}>
                    Abrir Teclado Emoji
                </Text>
        </View>
    )
}
