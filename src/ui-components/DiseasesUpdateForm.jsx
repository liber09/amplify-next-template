/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getDiseases } from "../graphql/queries";
import { updateDiseases } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function DiseasesUpdateForm(props) {
  const {
    id: idProp,
    diseases: diseasesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    symptoms: [],
    actions: "",
    checkpoints: [],
    selfcare: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [symptoms, setSymptoms] = React.useState(initialValues.symptoms);
  const [actions, setActions] = React.useState(initialValues.actions);
  const [checkpoints, setCheckpoints] = React.useState(
    initialValues.checkpoints
  );
  const [selfcare, setSelfcare] = React.useState(initialValues.selfcare);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = diseasesRecord
      ? { ...initialValues, ...diseasesRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setSymptoms(cleanValues.symptoms ?? []);
    setCurrentSymptomsValue("");
    setActions(cleanValues.actions);
    setCheckpoints(cleanValues.checkpoints ?? []);
    setCurrentCheckpointsValue("");
    setSelfcare(cleanValues.selfcare ?? []);
    setCurrentSelfcareValue("");
    setErrors({});
  };
  const [diseasesRecord, setDiseasesRecord] = React.useState(diseasesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDiseases.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDiseases
        : diseasesModelProp;
      setDiseasesRecord(record);
    };
    queryData();
  }, [idProp, diseasesModelProp]);
  React.useEffect(resetStateValues, [diseasesRecord]);
  const [currentSymptomsValue, setCurrentSymptomsValue] = React.useState("");
  const symptomsRef = React.createRef();
  const [currentCheckpointsValue, setCurrentCheckpointsValue] =
    React.useState("");
  const checkpointsRef = React.createRef();
  const [currentSelfcareValue, setCurrentSelfcareValue] = React.useState("");
  const selfcareRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    symptoms: [],
    actions: [],
    checkpoints: [],
    selfcare: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          symptoms: symptoms ?? null,
          actions: actions ?? null,
          checkpoints: checkpoints ?? null,
          selfcare: selfcare ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateDiseases.replaceAll("__typename", ""),
            variables: {
              input: {
                id: diseasesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DiseasesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              symptoms,
              actions,
              checkpoints,
              selfcare,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              symptoms,
              actions,
              checkpoints,
              selfcare,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              symptoms: values,
              actions,
              checkpoints,
              selfcare,
            };
            const result = onChange(modelFields);
            values = result?.symptoms ?? values;
          }
          setSymptoms(values);
          setCurrentSymptomsValue("");
        }}
        currentFieldValue={currentSymptomsValue}
        label={"Symptoms"}
        items={symptoms}
        hasError={errors?.symptoms?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("symptoms", currentSymptomsValue)
        }
        errorMessage={errors?.symptoms?.errorMessage}
        setFieldValue={setCurrentSymptomsValue}
        inputFieldRef={symptomsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Symptoms"
          isRequired={false}
          isReadOnly={false}
          value={currentSymptomsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.symptoms?.hasError) {
              runValidationTasks("symptoms", value);
            }
            setCurrentSymptomsValue(value);
          }}
          onBlur={() => runValidationTasks("symptoms", currentSymptomsValue)}
          errorMessage={errors.symptoms?.errorMessage}
          hasError={errors.symptoms?.hasError}
          ref={symptomsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "symptoms")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Actions"
        isRequired={false}
        isReadOnly={false}
        value={actions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              symptoms,
              actions: value,
              checkpoints,
              selfcare,
            };
            const result = onChange(modelFields);
            value = result?.actions ?? value;
          }
          if (errors.actions?.hasError) {
            runValidationTasks("actions", value);
          }
          setActions(value);
        }}
        onBlur={() => runValidationTasks("actions", actions)}
        errorMessage={errors.actions?.errorMessage}
        hasError={errors.actions?.hasError}
        {...getOverrideProps(overrides, "actions")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              symptoms,
              actions,
              checkpoints: values,
              selfcare,
            };
            const result = onChange(modelFields);
            values = result?.checkpoints ?? values;
          }
          setCheckpoints(values);
          setCurrentCheckpointsValue("");
        }}
        currentFieldValue={currentCheckpointsValue}
        label={"Checkpoints"}
        items={checkpoints}
        hasError={errors?.checkpoints?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("checkpoints", currentCheckpointsValue)
        }
        errorMessage={errors?.checkpoints?.errorMessage}
        setFieldValue={setCurrentCheckpointsValue}
        inputFieldRef={checkpointsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Checkpoints"
          isRequired={false}
          isReadOnly={false}
          value={currentCheckpointsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.checkpoints?.hasError) {
              runValidationTasks("checkpoints", value);
            }
            setCurrentCheckpointsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("checkpoints", currentCheckpointsValue)
          }
          errorMessage={errors.checkpoints?.errorMessage}
          hasError={errors.checkpoints?.hasError}
          ref={checkpointsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "checkpoints")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              symptoms,
              actions,
              checkpoints,
              selfcare: values,
            };
            const result = onChange(modelFields);
            values = result?.selfcare ?? values;
          }
          setSelfcare(values);
          setCurrentSelfcareValue("");
        }}
        currentFieldValue={currentSelfcareValue}
        label={"Selfcare"}
        items={selfcare}
        hasError={errors?.selfcare?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("selfcare", currentSelfcareValue)
        }
        errorMessage={errors?.selfcare?.errorMessage}
        setFieldValue={setCurrentSelfcareValue}
        inputFieldRef={selfcareRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Selfcare"
          isRequired={false}
          isReadOnly={false}
          value={currentSelfcareValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.selfcare?.hasError) {
              runValidationTasks("selfcare", value);
            }
            setCurrentSelfcareValue(value);
          }}
          onBlur={() => runValidationTasks("selfcare", currentSelfcareValue)}
          errorMessage={errors.selfcare?.errorMessage}
          hasError={errors.selfcare?.hasError}
          ref={selfcareRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "selfcare")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || diseasesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || diseasesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
