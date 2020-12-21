const selectGeneratorQuestionHint = "Select the template that best fits the type of application you want to develop";
const selectTargetFolderQuestionHint = "The template will be generated in the folder specified below and it will contain the relevant files and configurations that will help you create a project quickly and easily";

export default {
	step_is_generating: "Generating...",
    select_generator_not_found: "Could not find any generators.",
    artifact_generated: `The project has been generated.`,
    artifact_with_name_generated: (artifactName: string) => `The '${artifactName}' project has been generated.`,
    show_progress_button: "Open Output View",
    show_progress_message: "Generating...",
    generators_loading: "Loading project templates...",
    panel_title: "Project From Template",
    step_is_pending: "Loading template step...",
    yeoman_ui_title: "New Project From Template",
    select_generator_name: "Select Template and Target Location",
    select_generator_question_message: "Templates",
    select_generator_question_hint: selectGeneratorQuestionHint,
    select_target_folder_question_hint: selectTargetFolderQuestionHint,
    channel_name: "Templates",
    select_generator_description: `${selectGeneratorQuestionHint}.\n${selectTargetFolderQuestionHint}.` // NOSONAR
}; 
