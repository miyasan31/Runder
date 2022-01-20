/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/destructuring-assignment */
import type { VFC } from "react";
import React, { useEffect, useRef } from "react";
import { useToaster } from "react-hot-toast/src/core/use-toaster";
import { Animated } from "react-native";
import { Text, View } from "src/components/custom";

const ToastBar = ({ toast, updateHeight, offset, options, position, ...props }: any) => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;
  const posAnim = useRef(new Animated.Value(-80)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: toast.visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    } as any).start();
  }, [fadeAnim, toast.visible]);

  useEffect(() => {
    Animated.spring(posAnim, {
      toValue: toast.visible ? offset : -80,
      useNativeDriver: true,
    } as any).start();
  }, [posAnim, offset, toast.visible]);

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: toast.visible ? 9999 : undefined,
        alignItems: "center",
        opacity: fadeAnim,
        transform: [{ translateY: posAnim }],
      }}
    >
      <View
        key={toast.id}
        onLayout={(event) => updateHeight(toast.id, event.nativeEvent.layout.height)}
        style={{
          margin: 50,
          backgroundColor: "#ffffff",
          borderRadius: 9999,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 16,
          width: "auto",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            width: "auto",
          }}
        >
          {toast.icon}
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 5,
            color: "#323232",
            textAlign: "center",
            width: "auto",
            // fontWeight: "bold",
          }}
        >
          {toast.message}
        </Text>
      </View>
    </Animated.View>
  );
};

export const Toaster: VFC<any> = ({ position = "top-center", containerStyle, toastOptions }) => {
  const { toasts, handlers } = useToaster();
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        width: "100%",
        ...containerStyle,
      }}
    >
      {toasts.map((toast: any) => (
        <ToastBar
          key={toast.id}
          toast={toast}
          updateHeight={handlers.updateHeight}
          offset={handlers.calculateOffset(toast.id, {
            reverseOrder: false,
          })}
          position={position}
          options={{
            ...toastOptions,
            ...toastOptions?.[toast.type],
          }}
        />
      ))}
    </View>
  );
};
