// LoadingContext.js
import React, {createContext, useCallback, useMemo, useState} from 'react';
import PropTypes from "prop-types";

// 创建 Context 对象
export const LoadingContext = createContext();

// 提供者组件
export const LoadingProvider = ({children}) => {
    const [loadingCount, setLoadingCount] = useState(0);

    const startLoading = useCallback(() => setLoadingCount(count => count + 1), []);
    const stopLoading = useCallback(() => setLoadingCount(count => Math.max(0, count - 1)), []);
    
    // 是否正在加载
    const isLoading = loadingCount > 0;

    // useMemo 避免每次渲染都生成新对象
    const value = useMemo(() => ({startLoading, stopLoading, isLoading}), [loadingCount]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
};

LoadingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};