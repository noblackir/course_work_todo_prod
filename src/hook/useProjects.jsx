import {useMemo} from "react";

export const useSortedProjects = (projects, sort) => {
    const sortedProjects = useMemo(() => {
        if(sort) {
            return [...projects].sort((a, b) => a[sort]?.localeCompare(b[sort]))
        }
        return projects;
    }, [sort, projects])

    return sortedProjects;
}

export const useProjects = (projects, sort, query) => {
    const sortedProjects = useSortedProjects(projects, sort);

    const sortedAndSearchedProjects = useMemo(() => {
        return sortedProjects.filter(project => project?.title?.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedProjects])

    return sortedAndSearchedProjects;
}