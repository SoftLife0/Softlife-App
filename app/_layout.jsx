import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
        <Stack name='index' options={{ headerShown: false }} />
    </Stack>
  )
}

export default Layout