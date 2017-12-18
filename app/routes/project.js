import Project from '../models/project';

const getProjects = (req, res) => {


    Project.find (null, null, (err, projects)=>{
        if(err){
            res.send(err);
        }

        res.json(projects);
    })
};

const getProject = (req, res) => {

    const {id} = req.params;

    Project.findById(id, (err, project) => {
        if(err){
            res.send(err);
        }

        res.json(project)
    })
};

const postProject = (req, res) => {
    let project = Object.assign(new Project(), req.body);

    project.save(err => {
        if(err){
            res.send(err);
        }

        res.json({message: 'game created'})

    })
};

const deleteProject = (req, res) => {
    Project.remove( { _id: req.params.id },
        err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'successfully deleted' }); // A simple JSON answer to inform the client
        })
}

export { getProjects, getProject, postProject, deleteProject };